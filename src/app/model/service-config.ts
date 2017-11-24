export class ServiceConfig {
	name: string;
	applicationName: string;
	value: string;
	type: string;
	id: number;

	public static create(applicationName, name, value, type, id?: number): ServiceConfig {

		let model = new ServiceConfig();
		model.name = name;
		model.applicationName = applicationName;
		model.value = value;
		model.type = type;

		if (id != undefined && id != null) {
			model.id = id;
		}

		return model;
	}
}
