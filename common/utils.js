const utility = {
    successResponse: (payload) => {
        return {
            'data': payload,
            'error': {
                'code': 0,
                'message': 'sucess',
            }
        }
    },
    errorResponse: (error) => {
        return {
            'data': '',
            'error': {
                'code': 1,
                'message': error,
            }
        }
    }
}
module.exports = utility;