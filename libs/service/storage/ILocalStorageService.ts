export default abstract class ILocalStorage {
	protected abstract key: string
	protected abstract version: string
	private storage: Storage

	constructor() {
		this.storage = window.localStorage
	}

	protected set<T>(key: string, data: any): void {
		// Zod schema validation
		this.storage.setItem(key, JSON.stringify(data))
	}

	protected get<T>(key: string) : any | null {
		const data = this.storage.getItem(key)

		if (data == null) {
			return null
		}

		try {
			// Zod schema validation
			return JSON.parse(data)
		} catch (error) { }

		return null
	}

	public remove(key: string): void {
		this.storage.removeItem(key)
	}

	public removeAll(): void {
		this.storage.clear()
	}
}