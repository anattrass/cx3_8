import static org.junit.Assert.*;
import org.junit.*;
import blackjack.*;

public class CardTest {
  Card card;

  @Before
  public void beforeEach() {
    card = new Card(Rank.ACE, Suit.SPADES);
  }

  @Test
  public void canGetValue() {
    assertEquals(1, card.getValue());
  }

  @Test
  public void canOutputAsString() {
    assertEquals("ACE of SPADES", card.toString());
  }
}
