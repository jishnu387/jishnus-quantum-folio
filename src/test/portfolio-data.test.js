import { describe, it, expect } from 'vitest';
import { profile, projects, skills, certifications, articles, makeMailto } from '../data/portfolio';
describe('Portfolio content integrity', () => {
 it('keeps unprovided repository and demo links empty', () => { expect(projects.every(p => p.github === '' && p.demo === '')).toBe(true); });
 it('does not fabricate social or coding profile links', () => { expect(Object.values(profile.socials)).toEqual(['', '', '', '', '']); expect(Object.values(profile.coding)).toEqual(['', '']); });
 it('has no fabricated published articles', () => { expect(articles).toEqual([]); });
 it('preserves specified programming skills without percentages', () => { expect(skills[0].items).toEqual(['Python', 'Java']); expect(skills.some(s => 'percentage' in s)).toBe(false); });
 it('preserves the supplied certifications', () => { expect(certifications).toEqual(['AWS Academy Graduate – Cloud Architecting', 'AWS Generative AI Foundation training', 'Saylor Academy CS205: Building with Artificial Intelligence']); });
 it('cannot hand off an email without a recipient', () => { expect(makeMailto('', { name: 'A', email: 'a@test.com', subject: 'Hello', message: 'Hi' })).toBeNull(); });
 it('encodes a real email handoff without losing message input', () => { expect(makeMailto('owner@test.com', { name: 'A', email: 'a@test.com', subject: 'Idea & AI', message: 'Hello?' })).toBe('mailto:owner@test.com?subject=Idea%20%26%20AI&body=From%3A%20A%20%3Ca%40test.com%3E%0A%0AHello%3F'); });
});
