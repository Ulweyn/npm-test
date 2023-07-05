import {
	Controller,
	Delete,
	Get,
	Post,
	Put
} from "@nestjs/common";

@Controller("test")
export class ContrAbstractController  {
	
	@Get()
	findOne(params: any) {
		throw new Error("Method not implemented.");
	}
	@Post()
	create(params: any) {
		throw new Error("Method not implemented.");
	}
	@Put()
	update(params: any) {
		throw new Error("Method not implemented.");
	}
	@Delete()
	delete(params: any) {
		throw new Error("Method not implemented.");
	}

}