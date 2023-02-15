import debug from './debug-log';
import { replacer, reviver } from './json-parser';

interface Option {
  defaultValue?: any;
  onError?: (err: unknown) => void;
}

const log = debug('Util|LocalStorage:');

const defaultOption: Required<Option> = {
  onError: (err) => log(err),
  defaultValue: null,
};

export class LocalStorage<T> {
  private key: string;
  private option: Required<Option>;

  constructor(key: string, opt?: Option) {
    this.key = key;
    this.option = opt ? { ...defaultOption, ...opt } : defaultOption;
  }

  getItem() {
    try {
      const result = localStorage.getItem(this.key);

      if (result === null) {
        return result;
      }

      return JSON.parse(result, reviver) as T | null;
    } catch (error) {
      this.option.onError(error);
      localStorage.removeItem(this.key);
      localStorage.setItem(
        this.key,
        JSON.stringify(this.option.defaultValue, replacer)
      );
      return this.option.defaultValue;
    }
  }

  setItem(item: T) {
    try {
      const value = JSON.stringify(item, replacer);

      return localStorage.setItem(this.key, value);
    } catch (error) {
      this.option.onError(error);
    }
  }

  removeItem() {
    return localStorage.removeItem(this.key);
  }
}
