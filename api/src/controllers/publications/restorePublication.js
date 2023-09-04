const { publication } = require("../../db")

const restorePublication = async ({id}) => {
  try {
    const [restoredRows] = await publication.restore({
      where: {
        id: id
      }
    })
    if (restoredRows === 0) {
      return "Publication not found or already restored"
    }
    return "Publication restored successfully"
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = restorePublication;