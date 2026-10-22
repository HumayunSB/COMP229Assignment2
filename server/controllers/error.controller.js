const DEFAULT_ERROR_MESSAGE = 'An unexpected error occurred';

export function getErrorMessage(err) {
  return err?.message || DEFAULT_ERROR_MESSAGE;
}

export default { getErrorMessage };
