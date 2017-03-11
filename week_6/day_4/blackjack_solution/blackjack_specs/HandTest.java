import static org.junit.Assert.*;
import org.junit.*;
import blackjack.*;

public class HandTest {
  Hand hand;
  Card card;

  @Before
  public void beforeEach() {
    hand = new Hand();
    card = new Card(Rank.ACE, Suit.SPADES);
    hand.addCard(card);
  }

  @Test
  public void canAddCard() {
    assertEquals(1, hand.getValue());
  }

  @Test
  public void canGetValue() {
    assertEquals(1, hand.getValue());
  }
}
