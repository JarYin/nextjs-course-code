function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      email.trim() === "" ||
      !name ||
      name.trim() === "" ||
      !text ||
      text === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    console.log(email, name, text);
    const NewComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: "Added Comment", comment: NewComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "A First Comment!!" },
      { id: "c2", name: "Manuel", text: "A Second Comment!!" },
    ];

    res.status(200).json({comment: dummyList})
  }
}

export default handler;
