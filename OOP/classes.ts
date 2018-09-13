class Hero{
    private name:string;
    private alter_ego:string;
    private rank:number;

    constructor(name:string , alter_ego:string , rank:number)
    {
      this.name = name;
      this.alter_ego = alter_ego;
      this.rank = rank;
    }
    public getName():string
    {
      return this.name;
    }
    public getAlterego():string
    {
      return this.alter_ego;
    }
    public getRank():number
    {
      return this.rank;
    }
};

var hero = new Hero('Batman' , "Bruce Wayne" , 1);

console.log("The name of the superhero is " , hero.getName() , " whose real identity is \
" , hero.getAlterego() , " and is ranked " , hero.getRank());
