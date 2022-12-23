export abstract class Routes {
    public static root = '/'
    public static example = '/example/[id]'

    public static exampleParam(id: string) {
        // appeler getParams pour retourner /example/
        return `/example/${id}`
    }

    public static exampleParam2(id: string, id2: string) {
        // appeler getParams pour retourner /example/
        return `/example/${id}?param2=${id2}`
    }
}