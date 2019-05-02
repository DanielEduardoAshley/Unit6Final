class QueryService{
    constructor(){
        
    }

create=(obj, table_name)=>{
    let tables = ''
    let labels =''
    const keys = Object.keys(obj)
    keys.map(e=>{
        labels+= `${e},`
        tables+= `$[${e}]`
    })

   return `INSERT INTO ${table_name} (${labels}) VALUES (${tables})  `
}


read=(obj, table_name)=>{
    const keys = Object.keys(obj)
    const sql = keys.map(e=>{
        e = `$[${e}]`
    })
    sql.join('')
    
    return `SELECT * FROM ${table_name} WHERE ${sql}`
}


update=(obj, table_name, condition)=>{
    const keys = Object.keys(obj)
    const sql = keys.map(e=>{
        e = `$[${e}]`
    })

    return `UPDATE ${table_name} SET ${sql} WHERE ${condition}=$[${condition}]`
}


delete=(obj, table_name)=>{
    const keys = Object.keys(obj)
    const sql = keys.map(e=>{
        e = `$[${e}]`
    })
    sql.join('')
    
    return `Delete FROM ${table_name} WHERE ${sql}`
}

}





const newQueryService = new QueryService;

module.exports = newQueryService