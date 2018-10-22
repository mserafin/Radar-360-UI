const points = () => {
    let queue = [];

    return {
        get points() {
            return queue;
        },

        get length() {
            return queue.length - 1;
        },

        findIndex: index => queue[index],

        append: (data) => {
            queue.push(data);
        },

        clear: () => {
            queue = [];
        }
    };
};

export default points();
