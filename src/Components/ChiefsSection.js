import Chiefcards from "./Chiefcards"

export default function ChiefsSection(){
    const chiefs=[
        {
            name:"Juan Carlos",
            img:"/img/top_chiefs/img_1.jpg",
            recipesCount:"10",
            cuisine:"Mexican"
         },
         {
            name:"John Doe",
            img:"/img/top_chiefs/img_2.jpg",
            recipesCount:"5",
            cuisine:"Japanese"
         },
         {
            name:"Erich Maria",
            img:"/img/top_chiefs/img_3.jpg",
            recipesCount:"8",
            cuisine:"Australia"
         },
         {
            name:"Harish",
            img:"/img/top_chiefs/img_4.jpg",
            recipesCount:"8",
            cuisine:"India"
         },
         {
            name:"Hitler",
            img:"/img/top_chiefs/img_5.jpg",
            recipesCount:"3",
            cuisine:"America"
         },
         {
            name:"Nelson",
            img:"/img/top_chiefs/img_6.jpg",
            recipesCount:"10",
            cuisine:"Africa"
         }
    ]
    return(

        <div className="section chiefs">
            <h1 className="title">Our Top chiefs</h1>
            <div className="top-chiefs-container">
                {/* <Chiefcards />
                <Chiefcards />
                <Chiefcards />
                <Chiefcards />
                <Chiefcards />
                <Chiefcards /> */}
                {chiefs.map(chief => <Chiefcards keys={chief.name} chief={chief} /> )}
            </div>
            </div>
    )
}