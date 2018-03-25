from typing import Mapping, Dict


class InvalidUsage(Exception):
    """Handles API Exceptions and raises them to the user
    Usage:
        raise InvalidUsage("Object does not exist", status_code=404)
    """
    status_code: int = 400

    def __init__(self,
                 message: str,
                 status_code: int = None,
                 payload: Mapping = None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self) -> Dict:
        """Convert the exception to a dict for output
        Returns: Exception as a JSON-serializable dict
        """
        output_data = dict(self.payload or ())
        output_data['detail'] = self.message
        return output_data
