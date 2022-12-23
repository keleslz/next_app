type RandomTypeOptions = { rounded?: boolean }

export abstract class NumberUtil {
    static random(min = 0, max = 10, options?: RandomTypeOptions) {
        const r = Math.random() * (max - min) + min;

        if (options?.rounded) {
            return Math.floor(r)
        }

        return r
    }
}