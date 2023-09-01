const { Entity, PrimaryColumn, Column } = require("typeorm")

@Entity({name:"users"})
export class user{
    @PrimaryColumn(
        Types.STRING
    )
    id
    @Column(
        Types.STRING
    )
    name
    @Column(
        Types.STRING
    )
    username
    @Column(
        Types.STRING
    )
    password
    @Column(
        Types.STRING
    )   

}