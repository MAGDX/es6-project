class Piloto{

    //atributos
    private _nombre: string;

    //constructor
    constructor(){
        this._nombre = "piloto TODO set nombre";
    }

    /**
     * Getter nombre
     * @return {string}
     */
	public get nombre(): string {
		return this._nombre;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public set nombre(value: string) {
		this._nombre = value;
	}
}