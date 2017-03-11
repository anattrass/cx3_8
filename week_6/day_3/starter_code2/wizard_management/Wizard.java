package wizard_management;

public class Wizard {
  String name;
  Flyable ride;

  public Wizard(String name, Flyable ride){
    this.name = name;
    this.ride = ride;
  }

  public String getName(){
    return this.name;
  }

  public void setRide(Flyable ride) {
    this.ride = ride;
  }

  public Flyable getRide(){
    return this.ride;
  }

  public String fly(){
    return this.ride.fly();
  }

}