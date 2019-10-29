import { types } from 'mobx-state-tree';

const eventModel = types.model('userModel', {
    eventType: types.optional(types.string, ''),
    isHoliday: types.optional(types.boolean, 0),
});
const EventModel = eventModel.create();
export default EventModel;
