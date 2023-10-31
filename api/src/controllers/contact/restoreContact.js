const { contact } = require("../../db")

const restoreContact = async ({id}) => {
  try {
    const [restoredRows] = await contact.restore({
      where: {
        id: id
      }
    })
    if (restoredRows === 0) {
      return "Contact not found or already restored"
    }
    return "Contact restored successfully"
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = restoreContact;