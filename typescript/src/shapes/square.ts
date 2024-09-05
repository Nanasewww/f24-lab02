function newSquare(sideLen: number): Shape {
    let squareSideLen = sideLen;
    return {
        computeArea: function () {
            return squareSideLen * squareSideLen
        }
    }
}

export { newSquare }