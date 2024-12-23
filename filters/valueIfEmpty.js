export default function () {
    for (arg of arguments) {
        if (arg) {
            return arg;
        }
    }

    return false;
};