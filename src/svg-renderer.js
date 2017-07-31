/*
Custom SVG renderer. Renders SVG using canvas.
 */

var svgRenderer = {
    /**
     * @param $svg - SVG DOM element
     * @return canvas object with rendered image
     */
    renderSVG: function($svg, $callback) {

        var input = $svg.cloneNode(false);
        var nodes = [];
        var renderedGroups = [];
        var self = this;
        self.serializer = new XMLSerializer();
        var imageWidth  = $($svg).width();
        var imageHeight = $($svg).height();

        nodes = splitSvg($svg);

        var drawingCompleteEvent = new CustomEvent("drawingComplete", {
            bubbles: false,
        });

        setTimeout(function () {
            self.dispatchEvent(drawingCompleteEvent);
        }, 2000);

        nodes.forEach(function (node) {
            var workingNode = input.cloneNode(false);
            workingNode.appendChild(node);

            var mySVG    = workingNode,      // Inline SVG element
                can      = document.createElement('canvas'), // Not shown on page
                ctx      = can.getContext('2d'),
                loader   = new Image;                        // Not shown on page

            loader.width  = can.width  = imageWidth;
            loader.height = can.height = imageHeight;

            var svgAsXML = (new XMLSerializer).serializeToString( mySVG );
            loader.src = 'data:image/svg+xml,' + encodeURIComponent( svgAsXML );

            loader.onload = function(){
                ctx.drawImage( loader, 0, 0, loader.width, loader.height );

                loadImage(can.toDataURL()).then(function (image) {
                    renderedGroups.push(image);

                    if (nodes.length === renderedGroups.length) {
                        self.dispatchEvent(drawingCompleteEvent);
                    }
                });
            };

        });

        loadImage = function(data) {
            return new Promise(function (resolve, reject) {
                var img = new Image;
                img.onload = function() {
                    resolve(img);
                };
                img.onerror = function () {
                    reject(new Error('loading fail'));
                };
                img.src = data;
            });
        };


        self.addEventListener("drawingComplete", function(e) {
            var can      = document.createElement('canvas'), // Not shown on page
                ctx      = can.getContext('2d');

            can.width  = imageWidth;
            can.height = imageHeight;

            renderedGroups.forEach(function (image) {
                ctx.drawImage(image, 0, 0, can.width, can.height);
            });

            $callback(can);
        });

        function splitSvg($svg) {
            var nodes = [];

            $($svg).children('g').each(function (index, element) {

                if (self.serializer.serializeToString(element).length > 4500) {

                    $(element).children().each(function (i, e) {
                        nodes.push(element.cloneNode(false).appendChild(e.cloneNode(true)));
                    });

                } else {
                    nodes.push(element.cloneNode(true));
                }

            });

            return nodes;
        }
    }

};

module.exports = svgRenderer;