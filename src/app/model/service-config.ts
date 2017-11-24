export class ServiceConfig {
	name: string;
	key: string;
	value: string;
	type: string;
	id: number;

	public static create(name, key, value, type, id?: number): ServiceConfig {

		let model = new ServiceConfig();
		model.name = name;
		model.key = key;
		model.value = value;
		model.type = type;

		if (id != undefined && id != null) {
			model.id = id;
		}

		return model;
	}
}
