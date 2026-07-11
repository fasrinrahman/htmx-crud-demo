/**
 * views/helpers.js
 * Helper functions for formatting task dates, priorities, and statuses.
 */

function plural(value, word) {
  return `${value} ${word}${value === 1 ? "" : "s"}`;
}

function getRelativeTime(date) {
  if (!date) return "Unknown";

  const now = new Date();
  const created = new Date(date);

  const seconds = Math.floor((now - created) / 1000);

  if (seconds < 10) return "Just now";

  if (seconds < 60)
    return `${plural(seconds, "second")} ago`;

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60)
    return `${plural(minutes, "minute")} ago`;

  const hours = Math.floor(minutes / 60);

  if (hours < 24)
    return `${plural(hours, "hour")} ago`;

  const days = Math.floor(hours / 24);

  if (days < 7)
    return `${plural(days, "day")} ago`;

  return created.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function formatDueDate(date) {
  if (!date) return "No due date";

  const due = new Date(date);

  return due.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function getDueStatus(date) {
  if (!date)
    return {
      label: "No Due Date",
      className: "badge-secondary"
    };

  const now = new Date();
  const due = new Date(date);

  const diff = due - now;

  const hours = diff / (1000 * 60 * 60);

  if (hours < 0) {
    return {
      label: "Overdue",
      className: "badge-danger"
    };
  }

  if (hours <= 24) {
    return {
      label: "Due Today",
      className: "badge-warning"
    };
  }

  if (hours <= 48) {
    return {
      label: "Due Tomorrow",
      className: "badge-info"
    };
  }

  return {
    label: formatDueDate(date),
    className: "badge-primary"
  };
}

function getPriority(priority = "medium") {
  switch (priority.toLowerCase()) {
    case "high":
      return {
        label: "High",
        className: "priority-high",
        icon: "🔴"
      };

    case "low":
      return {
        label: "Low",
        className: "priority-low",
        icon: "🟢"
      };

    default:
      return {
        label: "Medium",
        className: "priority-medium",
        icon: "🟡"
      };
  }
}

module.exports = {
  getRelativeTime,
  formatDueDate,
  getDueStatus,
  getPriority
};