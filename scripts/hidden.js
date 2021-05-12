{
    const map = new Map;
    this["."] = {
        export(key, value)
        {
            map.set(key, value);
            return this;
        },
        add(...items)
        {
            while(items.length)
            {
                this.export(nextItem(), nextItem());
            }
            return this;
            
            function nextItem()
            {
                if(items.length) return items.shift();
                else throw SyntaxError("Follow-up parameter expected!");
            }
        },
        require(string)
        {
            return map.get(string);
        }
    };
}