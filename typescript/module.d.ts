interface Module{
    add(...items: (string | object)[]): this;
    export(string, object): this;
    require(string): object;
}