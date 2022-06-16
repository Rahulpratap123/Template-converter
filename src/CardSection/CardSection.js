import Card from "./Card";
const CardSection=()=>{
    return(
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <Card 
            CardTitle="Instagram " 
            cardDescription="Follow us on instagram" 
             btntext ="Follow"
          />
          <Card 
           CardTitle="Facebook" 
           cardDescription="Follow us on Facebook" 
            btntext ="Follow"
          />
          <Card
             CardTitle="Twitter" 
             cardDescription="Follow us on Twitter" 
              btntext ="Twitt"
          />
      
        </div>
      </div>
    </section>
    )
}
export default CardSection;