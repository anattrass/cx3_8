import static org.junit.Assert.*;
import org.junit.*;
import blackjack.*;

public class PlayerTest {
  Player player;
  Card card;

  @Before
  public void beforeEach() {
    player = new Player("Jarrod", new Hand());
    card = new Card(Rank.ACE, Suit.SPADES);
  }

  @Test
  public void canGetName() {
    assertEquals("Jarrod", player.getName());
  }

  @Test
  public void canAddCardToHandAndGetValue() {
    player.addCardToHand(card);
    assertEquals(1, player.getHandValue());
  }
}
