export abstract class StringUtil {
    static ucFirst(value: string) : string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    static truncate(value: string, length: number) : string {
        if(value.length > length) {
            return `${value.substring(0, length)}...`
        }
        return value
    }
}