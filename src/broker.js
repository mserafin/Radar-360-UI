const broker = () => {
    let data;

    return {
        get data() {
            return data;
        },

        append: (value) => {
            data = value;
        }
    };
};

export default broker();
