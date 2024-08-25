export const API_KEY = 'AIzaSyABTL7Tr3D0WbuXbrUhTHy4Xq0GjE8cGrU';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
}