interface IService<T> {
  create(obj:T): Promise<T>,
  readOne(_id: string): Promise<T | null>
}

export default IService;
