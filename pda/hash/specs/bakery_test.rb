require 'minitest/autorun'
require_relative '../bakery'

class TestBakery < Minitest::Test

  def setup

    @customers = [
      {
        name: "Adam",
        baked_goods: [],
        cash: 500
      },
      {
        name: "David",
        baked_goods: [],
        cash: 100
      }
    ]

    @bakery = {
        baked_goods: [
          {
            name: "Sausage Roll",
            type: "Savoury",
            price: 1
          },
          {
            name: "Apple Pie",
            type: "Sweet",
            price: 3
          }
        ],
        admin: {
          total_cash: 3500,
          baked_goods_sold: 0,
        },
        name: "Gregs"
      }
  end

  def test_pet_shop_name
    name = bakery_name(@bakery)
    assert_equal("Gregs", name)
  end

  def test_all_bakes_by_type
    bakes = bakes_by_type(@bakery, "Savoury")
    assert_equal(1, bakes.count)
  end

end