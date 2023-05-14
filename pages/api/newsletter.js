import clientPromise from "../../lib/mongo_db";
async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    await clientPromise;
    const client = await clientPromise
    const db = client.db()

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    res.status(201).json({ message: "Signed up!" });
    // let client;

    // try {
    //   client = await connectDatabase();
    // } catch (error) {
    //   res.status(500).json({ message: "Connecting to the database failed!" });
    //   return;
    // }

    // try {
    //   await insertDocument(client, "newsletter", { email: userEmail });
    //   client.close();
    // } catch (error) {
    //   res.status(500).json({ message: "Inserting data failed!" });
    //   return;
    // }
  }
}

export default handler;
