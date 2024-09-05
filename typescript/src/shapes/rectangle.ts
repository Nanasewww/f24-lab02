function newRectangle(width: number, height: number): Shape {
    let rectWidth = width;
    let rectHeight = height;
    return {
        computeArea: function (){
            return rectWidth * rectHeight
        }
    }
}

export { newRectangle }
