"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { programmes } from "../lib/programmes";
import { programmeImages } from "../lib/programme-images";
import { Icon } from "./icons";

const groups = [
  "All programmes",
  "Undergraduate",
  "Postgraduate",
  "English & skills",
];
const levels = [
  "Foundation",
  "Higher National Diploma",
  "Undergraduate degree",
  "Postgraduate",
  "English language",
  "Professional development",
];
const groupFor = (index: number) =>
  index < 3
    ? "Undergraduate"
    : index === 3
      ? "Postgraduate"
      : "English & skills";

export function ProgrammeFinder({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState("All programmes");
  const [query, setQuery] = useState("");
  const results = programmes
    .map((programme, index) => ({ ...programme, index }))
    .filter(
      (p) =>
        (active === "All programmes" || groupFor(p.index) === active) &&
        `${p.title} ${p.category} ${p.description} ${p.slug} ${levels[p.index]}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    );
  const visible =
    compact && active === "All programmes"
      ? results.filter((p) => [0, 3, 4].includes(p.index))
      : results;
  return (
    <div className="programme-finder">
      <div className="finder-controls">
        <div
          className="filter-list"
          role="group"
          aria-label="Filter by study level"
        >
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActive(group)}
              aria-pressed={active === group}
              className={active === group ? "active" : ""}
            >
              {compact && group === "All programmes" ? "Featured" : group}
              {!compact && group === "All programmes" && <span>06</span>}
            </button>
          ))}
        </div>
        {!compact && (
          <label className="programme-search">
            <Icon name="search" />
            <input
              type="search"
              aria-label="Search programmes"
              placeholder="Search programmes…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        )}
      </div>
      {!compact && (
        <p className="result-count" role="status">
          {results.length} {results.length === 1 ? "programme" : "programmes"}{" "}
          to explore
        </p>
      )}
      <div className="programme-grid" aria-live={compact ? "polite" : "off"}>
        {visible.map((programme) => (
          <Link
            className="programme-card"
            href={`/programmes/${programme.slug}`}
            key={programme.slug}
          >
            <div className="programme-photo">
              <Image
                src={programmeImages[programme.slug].src}
                style={{
                  objectPosition: programmeImages[programme.slug].position,
                }}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <span className="programme-level">{levels[programme.index]}</span>
              <span className="card-arrow">
                <Icon name="diagonal" />
              </span>
            </div>
            <div className="programme-body">
              <p className="programme-awarder">{programme.category}</p>
              <h3>{programme.title}</h3>
              <p>{programme.description}</p>
              <div className="programme-meta">
                <span>
                  <Icon name="clock" width={16} height={16} />
                  {programme.duration}
                </span>
                <span>
                  Explore programme <Icon name="arrow" width={16} height={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <Icon name="search" width={32} height={32} />
          <h3>No programmes found</h3>
          <p>Try another keyword or explore all of our programmes.</p>
          <button
            className="button button-navy"
            onClick={() => {
              setQuery("");
              setActive("All programmes");
            }}
          >
            Clear filters <Icon name="arrow" />
          </button>
        </div>
      )}
      {compact && (
        <div className="finder-bottom">
          <span>
            Different starting points. A shared ambition to go further.
          </span>
          <Link href="/programmes" className="text-link">
            View all 6 programmes <Icon name="arrow" />
          </Link>
        </div>
      )}
    </div>
  );
}
