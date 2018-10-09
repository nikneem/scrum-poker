﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HexMaster.BuildingBlocks.EventBus.Events;

namespace HexMaster.PlanningPoker.Poker.IntegrationEvents.Events
{
    public class PokerSessionParticipantEstimatedEvent : IntegrationEvent
    {
        public Guid PokerSessionId { get; }
        public Guid ParticipantId { get; }
        public int? PokerValue { get; }

        public PokerSessionParticipantEstimatedEvent(Guid pokerSessionId, Guid participantId, int? pokerValue)
        {
            PokerSessionId = pokerSessionId;
            ParticipantId = participantId;
            PokerValue = pokerValue;
        }
    }
}
