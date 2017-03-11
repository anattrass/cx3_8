package blackjack;

public class Player {
  private String name;
  private Hand hand;

  public Player(String name, Hand hand) {
    this.name = name;
    this.hand = hand;
  }

  public String getName() {
    return name;
  }

  public void addCardToHand(Card card) {
    hand.addCard(card);
  }

  public int getHandValue() {
    return hand.getValue();
  }
}
