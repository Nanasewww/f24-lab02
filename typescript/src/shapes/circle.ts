function newCircle(radius: number): Shape {
    let circleRadius = radius;
    return {
        computeArea: function () {
            return Math.PI * circleRadius * circleRadius
        }
    }
}

export { newCircle }
