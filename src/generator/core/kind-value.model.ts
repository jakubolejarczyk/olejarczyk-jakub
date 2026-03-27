export interface KeyValueModel<TEnum, TKind extends TEnum, TValue> {
  kind: TKind;
  value: TValue;
}
