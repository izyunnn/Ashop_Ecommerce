export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: require('../assets/img/home/slider1.jpg'),
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: require('../assets/img/home/slider2.jpg'),
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: require('../assets/img/home/slider3.jpg'),
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: require('../assets/img/home/slider4.jpg'),
                alt: 'Description for Image 4',
                title: 'Title 4'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};
