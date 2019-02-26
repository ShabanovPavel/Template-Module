let instance;

/**
 * @class AnalyticService
 * @classdesc Сервиc аналитики
 */
export default class AnalyticService {
	/**
	 *  Инициализация
	 *  @instance
	 *  @memberof AnalyticService
	 */
	static instance() {
		if (!instance) {
			instance = new AnalyticService();
		}
		return instance;
	}

	constructor() {
		this.arrayScreen = [];
		this.lastNameScreen = '';
	}

	/**
	 * Регистрирует сцену как открывшуюся
	 * @param {String} nameScreen имя сцены
	 * @memberof AnalyticService
	 * @public
	 */
	pushScreen(nameScreen) {
		if (this.lastNameScreen !== nameScreen) {
			this.arrayScreen.push(nameScreen);
			this.lastNameScreen = nameScreen;
			// console.log(this.arrayScreen);
		}
	}

	/**
	 * Выгружает данные о сценах
	 * @returns {Array.String}  массив имен сцен
	 * @memberof AnalyticService
	 * @public
	 */
	getStack() {
		const ar = [...this.arrayScreen];
		this.arrayScreen = [];
		return ar;
	}
}