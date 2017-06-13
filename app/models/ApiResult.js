class ApiSuccess {
  constructor(resCode, resMsg, result) {
    this.resCode = resCode
    this.resMsg = resMsg
    this.result = result
  }
}

class ApiError {
  constructor(resCode, resMsg) {
    this.resCode = resCode
    this.resMsg = resMsg
  }
}

module.exports = {
  ApiSuccess,
  ApiError
}