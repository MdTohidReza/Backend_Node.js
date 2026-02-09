import Sale from "../models/Sale.js";

// Add a new sale record
export const addSale = async (req, res) => {
  try {
    const { name, amount, deals } = req.body;

    if (!name || !amount || !deals) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sale = new Sale({ name, amount, deals });
    await sale.save();
    res.status(201).json({ message: "Sale added successfully", sale });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get leaderboard
export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Sale.aggregate([
      {
        $group: {
          _id: "$name",
          totalSales: { $sum: "$amount" },
          totalDeals: { $sum: "$deals" },
        },
      },
      { $sort: { totalSales: -1 } },
    ]);

    // Assign ranks
    let rank = 1;
    const result = leaderboard.map((agent, idx) => {
      if (idx > 0 && agent.totalSales < leaderboard[idx - 1].totalSales) {
        rank = idx + 1;
      }
      return {
        rank,
        name: agent._id,
        totalSales: agent.totalSales,
        totalDeals: agent.totalDeals,
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
