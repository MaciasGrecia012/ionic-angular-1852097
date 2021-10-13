export class Reservaciones{
  constructor(
    public id: string,
    public restauranteid: string,
    public restaurante: string,
    public horario: string,
    public imgUrl: string
    ){}
}