function maxArea(height: number[]): number {
    // Area is L x B
    let area = 0;
    let max = 0;

    for (let index = 0; index < height.length; index++) {
        index = 0
        for (let index1 = 1; index1 < height.length; index1++) {
            if (height[index] > height[index1]) {
                area = height[index1] * index1
                if (max < area) {
                    max = area;
                }
            } else {
                area = height[index] * index1
                if (max < area) {
                    max = area;
                }
            }
        }
        height.splice(index, 1)
    }
    return max;
};
