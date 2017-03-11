public class ExampleTryCatch{
  PetShop shop;

  public void run(){

  try {
    setup();
    Pet found = shop.findPetByName("MEOWingtons");
    System.out.println("Found pet: " + found.getName());
  }
  catch (NullStringException ex) {
      System.out.println("Exception Message:");
      System.out.println(ex.getMessage());
      ex.printStackTrace();
  }
  finally {
    System.out.println("and finally...");
    System.out.println("I'm done.");
  }
}

  public void setup(){
    shop = new PetShop();
    shop.addPet(new Dog("Rover"));
    shop.addPet(new Cat("MEOWingtons"));
    shop.addPet(new Fish("FINlay"));
  }
}
