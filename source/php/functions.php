<?php
function check_symbol($value, $field_name, $required, $pattern)
{
  if ($required == "1" && empty($value)) {
    $GLOBALS['alert'] = $GLOBALS['alert'] . 'Поле \"' . $field_name . '\" не заполнено' . '\n';
    return;
  }
  $value = trim($value);
  $value = stripslashes($value);
  $value = strip_tags($value);
  $value = htmlspecialchars($value);
  if ($pattern != "0") {
    if (!empty($value) && !preg_match($pattern, $value, $matches)) $GLOBALS['alert'] = $GLOBALS['alert'] . 'Значение в поле \"' . $field_name . '\" не корректно' . '\n';
  }
  return $value;
}
