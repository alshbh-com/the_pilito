const ACTIVE_COURIER_STATUS_NAMES = new Set([
  'جديد',
  'قيد التوصيل',
  'مؤجل',
  'لم يرد',
  'لايرد',
]);

type CourierOrderLike = {
  id: string;
  is_courier_closed?: boolean | null;
  order_statuses?: {
    name?: string | null;
  } | null;
};

export const isCourierOrderClosable = (statusName?: string | null) => {
  if (!statusName) return false;
  return !ACTIVE_COURIER_STATUS_NAMES.has(statusName);
};

export const getHiddenActiveCourierOrderIds = (orders: CourierOrderLike[]) => {
  return orders
    .filter((order) => order.is_courier_closed && !isCourierOrderClosable(order.order_statuses?.name))
    .map((order) => order.id);
};