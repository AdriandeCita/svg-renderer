/*
Custom SVG renderer. Renders SVG using canvas.
 */

export class svgRenderer {
    input: any;
    nodes: any[];
    renderedGroups: any[];
    serializer: any;
    imageWidth: number;
    imageHeight: number;

    constructor() {
        this.nodes = [];
        this.renderedGroups = [];
        this.serializer = new XMLSerializer();

        // this.addEventListener("drawingComplete", function(e) {
        //     var can      = document.createElement('canvas'), // Not shown on page
        //         ctx      = can.getContext('2d');
        //
        //     can.width  = this.imageWidth;
        //     can.height = this.imageHeight;
        //
        //     this.renderedGroups.forEach(function (image) {
        //         ctx.drawImage(image, 0, 0, can.width, can.height);
        //     });
        //
        //     $callback(can);
        // });
    }
    //
    // /**
    //  * @param $svg - SVG DOM element
    //  * @return canvas object with rendered image
    //  */
    // renderSVG($svg: any, $callback: any) {
    //
    //     this.input = $svg.cloneNode(false);
    //     this.imageWidth  = $($svg).width();
    //     this.imageHeight = $($svg).height();
    //
    //     this.nodes = this.splitSvg($svg);
    //     let self = this;
    //
    //     var drawingCompleteEvent = new CustomEvent("drawingComplete", {
    //         bubbles: false,
    //     });
    //
    //     setTimeout(function () {
    //         self.dispatchEvent(drawingCompleteEvent);
    //     }, 2000);
    //
    //     this.nodes.forEach(function (node) {
    //         let workingNode = this.input.cloneNode(false);
    //         workingNode.appendChild(node);
    //
    //         let mySVG    = workingNode,      // Inline SVG element
    //             can      = document.createElement('canvas'), // Not shown on page
    //             ctx      = can.getContext('2d'),
    //             loader   = new Image;                        // Not shown on page
    //
    //         loader.width  = can.width  = this.imageWidth;
    //         loader.height = can.height = this.imageHeight;
    //
    //         let svgAsXML = (new XMLSerializer).serializeToString( mySVG );
    //         loader.src = 'data:image/svg+xml,' + encodeURIComponent( svgAsXML );
    //
    //         loader.onload = function(){
    //             ctx.drawImage( loader, 0, 0, loader.width, loader.height );
    //
    //             this.loadImage(can.toDataURL()).then(function (image: any) {
    //                 this.renderedGroups.push(image);
    //
    //                 if (this.nodes.length === this.renderedGroups.length) {
    //                     self.dispatchEvent(drawingCompleteEvent);
    //                 }
    //             });
    //         };
    //
    //     });
    //
    // };
    //
    // loadImage = function(data: any) {
    //     return new Promise(function (resolve: any, reject: any) {
    //         var img = new Image;
    //         img.onload = function() {
    //             resolve(img);
    //         };
    //         img.onerror = function () {
    //             reject(new Error('loading fail'));
    //         };
    //         img.src = data;
    //     });
    // };
    //
    // splitSvg($svg: any) {
    //     let nodes: any = [];
    //
    //     $($svg).children('g').each(function (index: any, element: any) {
    //
    //         if (this.serializer.serializeToString(element).length > 4500) {
    //
    //             $(element).children().each(function (i, e) {
    //                 nodes.push(element.cloneNode(false).appendChild(e.cloneNode(true)));
    //             });
    //
    //         } else {
    //             nodes.push(element.cloneNode(true));
    //         }
    //
    //     });
    //
    //     return nodes;
    // }

}